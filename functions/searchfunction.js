export class Searchfunction{
    
    // for searching
    arraySearcher = (search, arrayname) => {
        // let condition = new RegExp(search)  
            // arrayname.filter(item=>
            // {
            //     let y = Object.values(item);
            //     let t = y.map(String);
            //     let mycheck = t.filter(el => {
            //         return el.includes(search);
            //     })
            //     mycheck = mycheck.map((str, index) => ({ value: str, id: index + 1 }));
            //     console.log(mycheck);
            // });
            let tolowercasesearch = search.toLowerCase();
            let val = arrayname.filter(function(data){
               return JSON.stringify(data).toLowerCase().includes(tolowercasesearch);
            });
            return val;
    };


    // for e-mail validation
    emailValidation = () => {
        
    }


}




