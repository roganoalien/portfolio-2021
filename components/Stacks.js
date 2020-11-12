import CardTech from './CardTech';

function Stacks() {
	return (
		<>
			<section className="stacks-container w-full pt-16 md:pt-32">
				<article className="front-end container mx-auto flex flex-wrap items-start justify-center px-10">
					<div className="left-side w-full lg:w-4/12 flex flex-col pr-10">
						<h3 className="text-lg font-black uppercase opacity-50 w-full">
							Tecnología Favorita
						</h3>
						<h2 className="text-xl md:text-2xl lg:text-3xl font-black text-blue w-full">
							Front-End <span className="text-black">Stack</span>
						</h2>
						<p className="mt-2 w-full">
							Dependiendo del proyecto, tiempo, presupuesto o
							limitantes estas son mis tecnologías favoritas.
							Otras herramientas utilizadas: jquery, angular,
							redux, context, npm, yarn, babel, stylus, less,
							handlebars, GraphQL, WordPress y más.
						</p>
					</div>
					<div className="right-side w-full lg:w-7/12 pt-4 lg:pt-8 grid gap-2 grid-cols-1 sm:grid-cols-2 mt-4 md:grid-cols-2 lg:mt-0 lg:grid-cols-2">
						<CardTech
							url="https://reactjs.org"
							img="/images/tech/react.svg"
							title="ReactJS"
							sub="Javascript Framework"
						/>
						<CardTech
							url="https://developer.mozilla.org/es/docs/Web/JavaScript"
							img="/images/tech/javascript.svg"
							title="Vanilla JS"
							sub="Pure Javascript"
						/>
						<CardTech
							url="https://sass-lang.com"
							img="/images/tech/sass.svg"
							title="SaSS"
							sub="CSS Preprocessor"
						/>
						<CardTech
							url="https://pugjs.org"
							img="/images/tech/pug.png"
							title="Pug"
							sub="Html template engine"
							smaller={true}
						/>
						<CardTech
							url="https://gulpjs.com"
							img="/images/tech/gulp.svg"
							title="Gulp"
							sub="Workflow automator"
						/>
						<CardTech
							url="https://webpack.js.org"
							img="/images/tech/webpack.svg"
							title="Webpack"
							sub="Bundler"
						/>
					</div>
				</article>
				<article className="front-end container mx-auto flex flex-wrap items-start justify-center px-10 mt-16 md:mt-32">
					<div className="left-side w-full lg:w-4/12 flex flex-col pr-10">
						<h2 className="text-xl md:text-2xl lg:text-3xl font-black text-blue w-full">
							Back-End <span className="text-black">Stack</span>
						</h2>
						<p className="mt-2 w-full">
							Servidores VPS o Serverless, base de datos y demás
							tecnología usada para la lógica detrás de un sitio.
							Otras herramientas o tecnologías usadas: jenkins,
							git, github, gitlab, bitbucket, heroku, netlify,
							MySQL, PostgresQL, JIMP, GraphQL, php, WordPress,
							Strapi y más.
						</p>
					</div>
					<div className="right-side w-full lg:w-7/12 pt-4 lg:pt-8 grid gap-2 grid-cols-1 sm:grid-cols-2 mt-4 md:grid-cols-2 lg:mt-0 lg:grid-cols-2">
						<CardTech
							url="https://nodejs.org"
							img="/images/tech/nodejs.svg"
							title="NodeJS"
							sub="Server side Javascript"
						/>
						<CardTech
							url="https://expressjs.com"
							img="/images/tech/express.svg"
							title="Express JS"
							sub="Nodejs web framework"
						/>
						<CardTech
							url="https://mongodb.com"
							img="/images/tech/mongodb.svg"
							title="MongoDB"
							sub="NoSQL Database"
						/>
						<CardTech
							url="https://nginx.org"
							img="/images/tech/nginx.svg"
							title="NGiNX"
							sub="Reverse proxy web server"
						/>
						<CardTech
							url="https://digitalocean.com"
							img="/images/tech/digitalocean.png"
							title="Digital Ocean"
							sub="Cloud hosting provider"
							smaller={true}
						/>
						<CardTech
							url="https://vercel.com"
							img="/images/tech/vercel.svg"
							title="Vercel"
							sub="Cloud platform"
						/>
						<CardTech
							url="https://deno.land"
							img="/images/tech/deno.svg"
							title="Deno"
							sub="Secure runtime Typescript"
						/>
						<CardTech
							url="https://typescriptlang.org"
							img="/images/tech/typescript.svg"
							title="TypeScript"
							sub="Typed superset JS"
						/>
					</div>
				</article>
				<article className="front-end container mx-auto flex flex-wrap items-start justify-center px-10 mt-16 md:mt-32">
					<div className="left-side w-full lg:w-4/12 flex flex-col pr-10">
						<h2 className="text-xl md:text-2xl lg:text-3xl font-black text-blue w-full">
							Design <span className="text-black">Stack</span>
						</h2>
						<p className="mt-2 w-full">
							Software favorito para UI/UX design. Otras
							herramientas o tecnologías usadas: after effects,
							logic, etc.
						</p>
					</div>
					<div className="right-side w-full lg:w-7/12 pt-4 lg:pt-8 grid gap-2 grid-cols-1 sm:grid-cols-2 mt-4 md:grid-cols-2 lg:mt-0 lg:grid-cols-2">
						<CardTech
							url="https://www.sketch.com"
							img="/images/tech/sketch.svg"
							title="Sketch"
							sub="UI Design"
						/>
						<CardTech
							url="https://zeplin.io"
							img="/images/tech/zeplin.png"
							title="Zeplin"
							sub="Share design & assets"
							smaller={true}
						/>
						<CardTech
							url="https://adobe.com/products/xd.html"
							img="/images/tech/xd.png"
							title="Xd"
							sub="Adobe UI design"
							smaller={true}
						/>
						<CardTech
							url="https://adobe.com/mx/products/photoshop.html"
							img="/images/tech/photoshop.png"
							title="Photoshop"
							sub="Photo and design"
							smaller={true}
						/>
						<CardTech
							url="https://framer.com"
							img="/images/tech/framer.png"
							title="Framer"
							sub="Prototyping Tool"
							smaller={true}
						/>
					</div>
				</article>
			</section>
		</>
	);
}

export default Stacks;
