import * as React from 'react';
import { Head, Footer, Article } from '@dailybruin/lux';
/*
 * Coverphoto
 */
const IndexPage = () => (
  <div>
    <Head
      siteName="Dribble for the Cure"
      description="testing 123 123"
      url=""
      image="https://lh3.googleusercontent.com/Eg4qDeTD4Efy07T52jJj5DUG4oRyaetRH0UGfkHoT0jBeFlCoVdAVtLNuMq2vR1XkUbv=w300"
    />

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    
    <Footer
      githubName={'https://github.com/dailybruin/interactive.2018.dribble-for-the-cure'}
      developers={['Richard Yang', 'Kevin Qian']}
      copyrightYear={2018}
    />
  </div>
)

export default IndexPage
