import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>What is context API?</h1>

            <p>The context API the structure of a component what is provided by the React framework, it allows us to share ceirten forms data to all level of the application.
                It is acctullay for props drilling problem.
                Before it's coming we could use a single modulle to solve this, It is condiderd for as experimental.It is much more useful for sharing data. By using it we can reaches another component down the tree .If we use the context API and we  need not to use extra modules. It is one of the key features of the react framework .
                <h1>What is sementic tag ?</h1>
                <p>Sementic tag are those tag which is describing the pupose of the element and the type of content that is inside them.It is the tag where we can get the objective of the tag . It is easy to get the meaning of the tag to both the devoloper and the browser. These tag clearly explain its content.
                    It helps the search engine as well as user device to determine the importance and context of web pages.Some exampe are header, nav, section,article,aside,footer etc. </p>
            </p>
        </div>
    );
};

export default Blog;