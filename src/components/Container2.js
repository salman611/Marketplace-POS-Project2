
// import React from 'react';
// import Item from './Item';


// export default class Container2 extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       filter: "all"
//     };
//   }

//   handleFilterClick = filter => {
//     this.setState({ filter: filter });
//   };



// render() {

//   const allProducts = this.props.products.map((product, index) =>{
//     return (<Item addToFav={this.props.addfavorite} image = {product.imgUrl} key={index} product={product}
//         price={product.price}  name= {product.name}/>
//   )})

   
//     this.state.filter !== "all"
//       ? this.setState({ filter: filter }): fave;

//     return (
//       // Main div for the film listing, with films h1 tag under it
//       <div className="film-list">
//         <h1 className="section-title">FILMS</h1>
//         <div className="film-list-filters">
//           <div
//             className={`film-list-filter ${
//               this.state.filter === "all" ? "is-active" : ""
//             // }`}
//             onClick={() => this.handleFilterClick("all")}
//           >
//             ALL
//             <span className="section-count">{this.props.films.length}</span>
//           </div>
//           <div
//             onClick={() => this.handleFilterClick("faves")}
//             className={`film-list-filter ${
//               this.state.filter === "faves" ? "is-active" : ""
//             }`}
//           >
//             FAVES
//             <span className="section-count">{this.props.faves.length}</span>
//           </div>
//         </div>
//         {/* All films FilmRow components array */}
//         {showFilms}
//       </div>
//     );
//   }
// }