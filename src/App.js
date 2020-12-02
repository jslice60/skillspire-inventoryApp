import InventoryComponent from './InventoryFolder/InventoryComponent'

function App() {
  return (
    <div>
      <h1 className='header'>Welcome to Jimmy's General Store!</h1>
      <div className='dealsText'>
        <h2>We have four deals on cereal for you today.</h2>
      </div>
      <div className='inventoryCards'>
      <InventoryComponent name="Kashi" stockCount='55' price='$4.53'/>
      <InventoryComponent name='Cheerios' stockCount='10' price='$3.78'/>
      <InventoryComponent name='Frosted Flakes' stockCount='23' price='$2.99'/>
      <InventoryComponent name='Mini Wheats' stockCount='17' price='$3.15'/>
      </div>
    </div>
  );
}

export default App;
