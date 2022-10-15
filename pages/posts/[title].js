export default function Blog() {
  return (
    <div></div>
  )
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      permanent: false,
      destination: `https://spatocode.com/blog/${context.params.title}`
    }
  }
}
