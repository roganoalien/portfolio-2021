function CardTech({ url, img, title, sub, smaller }) {
	return (
		<a
			href={url}
			className="stack-card col-span-1 flex items-center justify-center py-8 px-10 bg-gray border border-transparent rounded-lg hover:shadow-xl transition duration-150 hover:z-10"
		>
			<div className="left w-auto">
				<img
					src={img}
					alt={title}
					className={smaller ? 'h-10 w-auto mr-12' : 'mr-8'}
				/>
			</div>
			<div className="right w-full">
				<p className="text-xl text-black font-black leading-tight m-0">
					{title}
				</p>
				<p className="text-black opacity-75 leading-tight m-0">{sub}</p>
			</div>
		</a>
	);
}

export default CardTech;
