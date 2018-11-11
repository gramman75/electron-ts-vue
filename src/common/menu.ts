/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

export class MenuService {

    public template: Array<Electron.MenuItemConstructorOptions>

    constructor(){
        this.template = this.createMenu() 
    } 

    createMenu() {
        let menu: Array<Electron.MenuItemConstructorOptions> =  [
            {label: 'Menu 1', submenu : [
                {label: 'Sub Menu1-1'}
            ]}
        ]

        return menu
    }



}
