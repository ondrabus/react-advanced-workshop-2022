import Link from "next/link"
import React from "react"
import Layout from '../components/Layout'

// interface IProps {
//   data: Homepage,
// }

// export const getStaticProps: GetStaticProps<IProps> = async ({ params, preview }) => {
// 	const data = await KontentService.Instance(preview).deliveryClient
//         .item<Homepage>('homepage')
//         .toPromise()

// 	return {
// 		props: {
//       data: data.data.item
// 		},
// 	}
// }

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="-mt-24 relative w-full py-12 px-12 bg-yellow-900">
        <div className="relative z-10 text-center py-24 md:py-48">
          <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">A taste of the conference season</h1>
          <Link href="/conference"><a className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4">Show locations</a></Link>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm">
          <Link href="/conference"><a className="border-b border-white">Find out more</a></Link>
          <Link href="/contact"><a className="border-b border-white">Get in touch</a></Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          className="w-full h-full absolute inset-0 object-cover opacity-70"
          alt="" />
      </div>

    </Layout>
  )
}

export default Home
