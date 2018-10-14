import React, { Component } from 'react';
import ItemDisplay from '../components/itemDisplay';
class BoyPage extends Component {
    constructor()
    {
        super();
        this.state={
            items:[
                {'name':'dsgsdggsd','size':'XL','price':'900','brandName':'dfdsgvs','cart':false},
                {'name':'dgsdsg','size':'XL','price':'800','brandName':'cksdfhk','cart':false},
                {'name':'gsdgdg','size':'XXL','price':'900','brandName':'jsdhsd','cart':false},
                {'name':'vdvgdyt','size':'L','price':'800','brandName':'iseu iush' ,'cart':false},
                {'name':'gfdteryvv','size':'L','price':'900','brandName':'sieuycbise','cart':false},
                {'name':'oichkfh','size':'M','price':'800','brandName':'scoueius','cart':false},
                {'name':'mvijtrio','size':'L','price':'900','brandName':'jsdhsd','cart':false},
                {'name':'voierutorj','size':'S','price':'800','brandName':'cpw0iofie','cart':false},
                {'name':'ry9erivmier9tu','size':'M','price':'900','brandName':'jsdhsd','cart':false},
                {'name':'ver8tvneriout','size':'L','price':'800','brandName':'cpw0iofie','cart':false},
                {'name':'re9jkdvnkg','size':'XL','price':'900','brandName':'scoueius','cart':false},
                {'name':'vepmivierv','size':'L','price':'800','brandName':'cpw0iofie','cart':false},
                {'name':'ve9rutvmeip','size':'M','price':'900','brandName':'jsdhsd','cart':false},
                {'name':'uryeryvrv','size':'M','price':'800','brandName':'cpw0iofie','cart':false},
                {'name':'thdkvjsvbj','size':'S','price':'700','brandName':'cpw0iofie','cart':false}

                
            ]
        }
    }
    render() {
        return (
            <div>
              <ItemDisplay content={this.state.items} />         
            </div>
        );
    }
}

export default BoyPage;