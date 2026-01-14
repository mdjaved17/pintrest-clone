import { FiDownload } from "react-icons/fi";


const ResultCard = ({item}) => {

  const addToCollection= (item)=>{
    const oldData=JSON.parse(localStorage.getItem('collection')) || [];
    const newData= [...oldData, item];
    localStorage.setItem('collection', JSON.stringify(newData));
    // console.log(oldData);
    
  }

  return (
    <div className="h-72 relative gap-3 w-60 bg-white rounded-lg overflow-hidden">
      <a className="h-full" href={item.url}>
        {item.type == 'photos' ? <img className="w-full h-full object-cover" src={item.image} alt="" />: ''}
        {item.type == 'videos' ? <video className="w-full h-full object-cover" autoPlay loop muted src={item.src}></video>: ''}
        {item.type == 'GIF' ? <img className="w-full h-full object-cover" src={item.image} alt="" /> : ''}
        </a>
        <div id="btn" className="w-full px-3 py-2 absolute bottom-0 flex justify-between items-center">
            <h2 className="text-sm font-semibold">{item.title}</h2>
            <button onClick={()=>{
              addToCollection(item)
            }} className="bg-blue-500 px-3 py-2 rounded-full cursor-pointer active:scale-95"><FiDownload /></button>
        </div>
    </div>

  );
};

export default ResultCard;