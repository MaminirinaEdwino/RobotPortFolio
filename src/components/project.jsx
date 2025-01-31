export default function Project({title, link}) {
	return <article className="backdrop-blur-lg p-2 rounded-2xl border border-blue-700 bg-blue-300/10">

		<h1 className="text-center text-white p-2 font-bold text-3xl">
			{title}</h1>
		<iframe width={400}
			height={600}
			className="bg-white rounded-2xl "
			src={link}/>

	</article>
}
