function About() {
	return (
		<section className="about-section h-screen w-full flex items-center justify-center relative">
			<div className="floating-dots pattern-dots-xl absolute top-0 right-0"></div>
			<div className="floating-dots horizontal-dots pattern-dots-xl absolute bottom-0 left-0"></div>
			<article className="container mx-auto px-10 lg:px-20 flex flex-wrap items-center justify-center">
				<div className="w-full lg:w-8/12 flex flex-col">
					<h3 className="text-lg font-black uppercase opacity-50">
						Acerca
					</h3>
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black">
						¡Hola y bienvenidx! <br />
						Soy un{' '}
						<span className="text-blue">Creative Developer</span>
					</h1>
					<p className="w-full mt-4">
						Hago desarrollo fullstack enfocado en{' '}
						<strong>Javascript</strong> y diseño de{' '}
						<strong>UI/UX</strong>. Actualmente vivo en la CDMX,
						trabajo en <strong>Aeroméxico</strong> como lead
						developer y estoy disponible para hacer{' '}
						<strong>freelance</strong>, proyectos o cualquier cosa
						relacionada a digital, tecnología y música.
					</p>
					<div className="w-full items-center justify-start">
						<a
							href="#CVDOWNLOAD"
							className="cv-download inline-flex items-center px-8 py-4 text-base leading-6 font-medium rounded-md text-white bg-blue hover:bg-darkBlue transition ease-in-out duration-150 mt-4 font-bold"
						>
							Descargar CV
						</a>
					</div>
				</div>
				<div className="hidden lg:w-4/12 lg:flex items-center justify-center">
					<div
						className="fake-image"
						style={{
							background:
								'url(https://miaeromexico.sfo2.cdn.digitaloceanspaces.com/tests/rgb.jpg)'
						}}
					></div>
				</div>
			</article>
		</section>
	);
}

export default About;
