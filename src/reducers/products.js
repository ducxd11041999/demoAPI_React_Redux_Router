var initialState = [
{
	id: 1,
	price : 400,
	name : "Iphone X",
	status:  true
},
{
	id: 2,
	price : 300,
	name : "Iphone 8",
	status:  true
},
{
	id: 3,
	price : 600,
	name : "Iphone 11",
	status:  true
}
];

const productReducers = (state = initialState , action) =>{
	switch(action.type){
		default:
			return[...state];
	}
}

export default productReducers;