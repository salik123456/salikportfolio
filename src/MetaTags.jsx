import { Helmet } from 'react-helmet';


function MetaTags() {
  return (
    <Helmet>
      <meta property="og:title" content="Salik | Portfolio" />
      <meta property="og:description" content="A modern portfolio site developed using React and ThreeJS" />
      <meta property="og:image" content='https://msalikportfolio.web.app/assets/portfoliosnap-603e29cc.png' />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default MetaTags;
