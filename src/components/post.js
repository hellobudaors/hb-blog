import React from "react"
import PropTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import { Styles } from "./styles";
import PostTitle from "./post-title";

class Post extends React.Component {

    render() {
        const post = this.props.data

        var body, title, featureImageURL, featureImagePosition, tags, slug

        title = post.title
        tags = post.tags
        slug = post.slug
        featureImageURL = post.feature_image
        body = <section className="post-body" dangerouslySetInnerHTML={ {
            __html: post.html,
        } } />

        // Setting feature image position
        tags.forEach(tag => {
            if (tag.slug === `hash-kep-felul`) {
                featureImagePosition = `top`
            } 
            if (tag.slug === `hash-kep-alul`) {
                featureImagePosition = 'bottom'
            }
        })

        return (
            <div className="pt4">

                <PostTitle featureImageUrl={ featureImageURL } featureImagePosition={ featureImagePosition }>{ title }</PostTitle>
                <div className={ Styles.page.m + Styles.sideSpacing + `post-container mt4 pb4` }>
                    <div className="lh-copy serif f4">{ body }</div>
                </div>

                <div className={ Styles.page.m + Styles.sideSpacing + `post-container mt5 pb4` }>
                    <h2 className="f2 bw3 bt b--gold">Beszélgetés</h2>
                    <div class="fb-comments" data-href={ `https://hellobudaors.com/` + slug } data-width="736" data-numposts="5"></div>
                    <div id="fb-root"></div>
                    <script dangerouslySetInnerHTML={ {
                        __html: `
                        (function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = 'https://connect.facebook.net/hu_HU/sdk.js#xfbml=1&version=v3.2';
                        fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));
                    `
                    } } />
                </div>

                {/* <div className={ Styles.page.m + Styles.sideSpacing + `post-container mt5 pb4` }>
                
                    <h2 className="f2 bw3 bt b--gold">Beszélgetés</h2>
                
                    <div className="mt4 pb4" dangerouslySetInnerHTML={ {
                            __html: `
                        <div id="disqus_thread"></div>
                        
                        <script>

                        var disqus_config = function () {
                            this.page.url = 'https://hellobudaors.com/` + slug + `';
                            this.page.identifier = 'hellobudaors';
                        };

                        (function() { // DON'T EDIT BELOW THIS LINE
                        var d = document, s = d.createElement('script');
                        s.src = 'https://hellobudaors.disqus.com/embed.js';
                        s.setAttribute('data-timestamp', +new Date());
                        (d.head || d.body).appendChild(s);
                        })();
                        </script>
                        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                    `
                        } } />
                </div> */}
            </div>
        )
    }
}

Post.defaultProps = {
    html: true,
}

Post.propTypes = {
    html: PropTypes.bool.isRequired,
}

export default Post