import style from './SearchBar.module.css'
function SearchBar(props) {
   return (
      <>
         <input type='search' />
         <button className={style.button} onClick={props.onSearch}>Agregar</button> 
      </>
   );
}
export default SearchBar;