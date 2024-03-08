import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { DespesaComponent } from './components/page/despesa/despesa.component';
import { ReceitaComponent } from './components/page/receita/receita.component';
import { CategoriaComponent } from './components/page/categoria/categoria.component';

export const routes: Routes = [
    {
        path : ('despesa') , component: DespesaComponent
    },
    {
        path: ('receita'), component : ReceitaComponent
    },
    {
        path : ('home'), component : HomeComponent
    },
    {
        path: ('categoria') , component : CategoriaComponent
    }
    
];
