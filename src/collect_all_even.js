
function collect_same_elements(collection_a, object_b) {
	var A_length = collection_a.length;
	var B_length = object_b.value.length;
	var arr=[];
	var i = 0;
	var j = 0;
	for(i = 0;i<A_length;i++){
		for(j = 0;j<B_length;j++){
			if(collection_a[i].key==object_b.value[j]){
				arr.push(collection_a[i].key);
				continue;
			}
		}
	}
	return arr;
}

module.exports = collect_same_elements;
