
import React, { useState, useEffect } from 'react'
import Api from './Api.js';
function App() {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const loadPost = async () => {
			setLoading(true);
			 Api.makeGetRequest("users").then(
				(res) => { 
				 console.log("ASD",res.data.data);
				   setPosts(res.data.data);
				 } 
			 );
			 setLoading(false);
		}
		loadPost();
	}, []);
	return (
		<>
			<div className="App">
			{posts.map((item,i) => {
                return (
                  <tr>
                   <td>
                      <strong>
                        {item.name} 
                      </strong>
                    </td>
                   </tr>
                );
              })}
			</div>
		</>
	);
}

export default App;
