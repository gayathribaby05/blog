import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

export default function BlogPost({ source, frontMatter }) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} />
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'blog'))
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.mdx', '') }
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'src', 'blog', `${params.slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data: frontMatter, content } = matter(fileContent)
  const mdxSource = await serialize(content)
  return {
    props: {
      source: mdxSource,
      frontMatter
    }
  }
}
