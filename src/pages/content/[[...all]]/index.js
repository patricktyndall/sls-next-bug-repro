import { useRouter } from 'next/router';

const ContentPage = ({ slug }) => {

	return (
		slug
	);
};

export default ContentPage;

export async function getStaticPaths(){
	try{
	
		return {
			paths: [{
				params: {
					all: ['page-1']
				}
			}],
			fallback: false,
		};
	}
	catch(e) {
		console.log(e);
	}
}

export async function getStaticProps({ params, preview=false }){

	return {
		props: {
			slug: params.all.join('/')
		}
	};
}