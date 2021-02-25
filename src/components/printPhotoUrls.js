import React, { Component } from "react";
import Photos from "./photosCol12";
import Photos2 from "./photosCol6";
import ImageSlider from "./ImageSlider";
import Modal from "./Modal";

class PrintPhotoUrls extends Component {
  state = { photos: [] };

  componentDidMount() {
    console.log("inside componentdidmount");
    fetch(
      `https://www-latest.practo.com/marketplace-api/mweb/profile/provider?slug=dr-dilip-joseph-wilson-family-physician-family&cache_refresh=false&is_bangalore=true&platform=mobile_web&city=bangalore&api_intent=profile_page&seo_context_type=&practiceId=711486&query_cache=true`
    )
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      // ...then we update the users state
      .then((data) => {
        console.log(
          data.data.providerRelations.relations[0].establishment.photos
        );
       
        var photoUrlArray =
          data.data.providerRelations.relations[0].establishment.photos;

        this.setState({ photos: photoUrlArray });
      })
      // Catch any errors we hit and update the app
      .catch((error) => this.setState({ users: error }));
  }
  render() {
    var list = [];
    var flag = 0;
    for (var i = 0; i < this.state.photos.length; i++) {
      if (flag === 0) {
        list[i] = <Photos url={this.state.photos} index={i} />;
        flag = 1;
      } else {
        if (parseInt(i + 1) < parseInt(this.state.photos.length))
          list[i] = <Photos2 url={this.state.photos} index={i} />;
        else {
          list[i] = <Photos url={this.state.photos} index={i} />;
        }
        i = i + 1;
        flag = 0;
      }

      // list[i]= <div className="row"><Photos url1={this.state.photos[i].url} url2={this.state.photos[i+1].url} url3={this.state.photos[i+2].url}/></div>
    }
    return (
      <div>
        {/* <ImageSlider slides={this.state.photos}/> */}

        {list}
      </div>
    );
  }
}

export default PrintPhotoUrls;
