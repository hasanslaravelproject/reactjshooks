
import React, { useState, useEffect } from 'react'
 
import Api from './Api.js';

function App() {

	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const loadPost = async () => {

			// Till the data is fetch using API
			// the Loading page will show.
			setLoading(true);

			// Await make wait until that
			// promise settles and return its reultb

			// headerl,k.,,asxl.xsd.cx x-c z 
			

			 Api.makeGetRequest("users").then(
				(res) => { 
				 console.log("ASD",res.data.data);
				   setPosts(res.data.data);
				 }  

			 );
			 

			// After fetching data stored it in posts state.
			//setPosts(response.data);

			// Closed the loading page
			setLoading(false);
		}

		// Call the function
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
