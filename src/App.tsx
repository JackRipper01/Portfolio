import { useState } from "react";
import logo from "./assets/react.svg";
import ListGroup from "./components/ListGroup";
import "./App.css";
import Profile from "./components/ProfilePhoto";
import TicTacToe from "./components/Tic-Tac-Toe";
import { jsx } from "react/jsx-runtime";

export default function App() {
  return <Profile />;
}

//========================    Learning Material ================================
// // Define the Product type
// interface Product {
//   category: string;
//   price: string;
//   stocked: boolean;
//   name: string;
// }

// // Define the props for FilterableProductTable
// interface FilterableProductTableProps {
//   products: Product[];
// }

// function FilterableProductTable({ products }: FilterableProductTableProps) {
//   const [filterText, setFilterText] = useState<string>("");
//   const [inStockOnly, setInStockOnly] = useState<boolean>(false);

//   return (
//     <div>
//       <SearchBar
//         filterText={filterText}
//         inStockOnly={inStockOnly}
//         onFilterTextChange={setFilterText}
//         onInStockOnlyChange={setInStockOnly}
//       />
//       <ProductTable
//         products={products}
//         filterText={filterText}
//         inStockOnly={inStockOnly}
//       />
//     </div>
//   );
// }

// interface ProductCategoryRowProps {
//   category: string;
// }

// function ProductCategoryRow({ category }: ProductCategoryRowProps) {
//   return (
//     <tr>
//       <th colSpan={2}>{category}</th>
//     </tr>
//   );
// }

// interface ProductRowProps {
//   product: Product;
// }

// function ProductRow({ product }: ProductRowProps) {
//   const name = product.stocked ? (
//     product.name
//   ) : (
//     <span style={{ color: "red" }}>{product.name}</span>
//   );

//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{product.price}</td>
//     </tr>
//   );
// }

// interface ProductTableProps {
//   products: Product[];
//   filterText: string;
//   inStockOnly: boolean;
// }

// function ProductTable({
//   products,
//   filterText,
//   inStockOnly,
// }: ProductTableProps) {
//   const rows: JSX.Element[] = [];
//   let lastCategory = "";

//   products.forEach((product) => {
//     if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
//       return;
//     }
//     if (inStockOnly && !product.stocked) {
//       return;
//     }
//     if (product.category !== lastCategory) {
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category}
//         />
//       );
//     }
//     rows.push(<ProductRow product={product} key={product.name} />);
//     lastCategory = product.category;
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   );
// }

// interface SearchBarProps {
//   filterText: string;
//   inStockOnly: boolean;
//   onFilterTextChange: (text: string) => void;
//   onInStockOnlyChange: (inStock: boolean) => void;
// }

// function SearchBar({
//   filterText,
//   inStockOnly,
//   onFilterTextChange,
//   onInStockOnlyChange,
// }: SearchBarProps) {
//   return (
//     <form>
//       <input
//         type="text"
//         value={filterText}
//         placeholder="Search..."
//         onChange={(e) => onFilterTextChange(e.target.value)}
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={inStockOnly}
//           onChange={(e) => onInStockOnlyChange(e.target.checked)}
//         />{" "}
//         Only show products in stock
//       </label>
//     </form>
//   );
// }

// const PRODUCTS: Product[] = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
// ];

// export default function App() {
//   return <FilterableProductTable products={PRODUCTS} />;
// }

// function App() {
//   let items = ["Franco", "Magela", "Alex", "Belkis", "Fabio","Diana"];

//   return (
//     <div>
//       {/* <ListGroup items={items} heading="Family Members" /> */}
//       <TicTacToe/>
//     </div>
//   );
// }

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }