import React, {Component, Fragment} from 'react';
import Form_add_user from './form_add_user';
import List_users from './list_users';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import {Dash} from "./dashboard_main";
import {ListUsers} from "./list_users";
import image1 from '../../../public/images/app_image.png'
import image_admin from '../../../public/images/user_image.png'
import { getCurentUser } from '../../actions/users';




var user = {
  name: 'test',
  email: 'email.test@test',
}

let navigation = []
const userNavigation = [
  { name: 'Admin Profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export class Dashboard extends Component{

    state={
        nav:"",

    }

    async componentDidMount() {
        this.setState({nav:"Dashboard"});
        navigation= [
              { name: 'Dashboard', href: '#', current: true },
              { name: 'Historique', href: '#', current: false },
              { name: 'Statestiques', href: '#', current: false },
              { name: 'Users', href: '#', current: false },
            ]

            user = await getCurentUser(localStorage.getItem("auth_token"));
    }

    clickNav(name){
        try{
            if(name===this.state.nav){
        }else {
            console.log("enter");
            var i =0;
            while (i<4){
                if(navigation[i].name===name){
                    navigation[i].current=true;
                }else {
                    navigation[i].current=false;
                }
            i++;
            }
            this.setState({nav:name});
        }
        }catch (e) {
            console.log(e.message)
        }

    }

    choseNav(){
        if (this.state.nav === 'Dashboard'){
            return <Dash/>
        }else if(this.state.nav === 'Users'){
            return <ListUsers/>
        }else if(this.state.nav === 'Historique'){

        }else if(this.state.nav === 'Statestiques'){

        }
    }



    render() {
     return (
      <>
    <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 inline-flex">
                      <img
                        className="h-12 w-12"
                        src={image1}
                        alt="Workflow"
                      />
                        <div className="flex items-center">
                            <p className="text-lg font-bold italic text-white">EPSP</p>
                            <p className="italic text-white">Djanet</p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {
                            navigation.map((item) => (
                          <a
                            key={item.name}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                            onClick={() => {this.clickNav(item.name)}}

                          >
                            {item.name}
                          </a>
                        ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      
                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={image_admin} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={image_admin} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">{this.state.nav}</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}

              {this.choseNav()}


          </div>
        </main>
      </div>

           {/*
             <Fragment>
      <Form_add_user />
      <List_users />
    </Fragment>
    */}

      </>

  );

 }


}