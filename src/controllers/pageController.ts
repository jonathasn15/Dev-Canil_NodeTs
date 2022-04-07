import { Request, Response } from 'express';
import { Pet } from '../models/Pet';
import { createMenuObject } from '../helpers/createMenuObject';


export const home = (req: Request, res: Response) =>{

    let list = Pet.getAll();

    res.render('pages/home', {
        menu: {
            all:createMenuObject('all')
        }, 
        banner:{
            tittle: 'todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}
export const dogs = (req: Request, res: Response) =>{

    let list = Pet.getFromType('dog');

    res.render('pages/home', {
        menu: {
            dog:createMenuObject('dog')
        }, 
        banner:{
           tittle: 'Cachoroos',
            background: 'banner_dog.jpg'
        },
        list
    });
}

export const cats = (req: Request, res: Response) =>{

    let list = Pet.getFromType('cat');
    res.render('pages/home', {
        menu: {
            cat:createMenuObject('cat')
        }, 
        banner:{
            tittle: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}
export const fishes = (req: Request, res: Response) =>{

    let list = Pet.getFromType('fish');
    res.render('pages/home', {
        menu: {
            fish:createMenuObject('fish')
        },
        banner:{
            tittle: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}
