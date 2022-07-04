
import React, {Component} from 'react';

export class Dash extends Component{
    render(){
        return(
         <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                      <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Nombre des malades</h3>
                             <p className="mt-1 max-w-2xl text-sm text-gray-500">50 malade</p>
                         </div>
                  </div>
                  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                      <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Just test</h3>
                             <p className="mt-1 max-w-2xl text-sm text-gray-500">10 this day </p>
                         </div>
                  </div>

         </div>

    );

    }

}