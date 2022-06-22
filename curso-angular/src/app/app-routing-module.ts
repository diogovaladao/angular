import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DirectivasComponent } from "./components/directivas/directivas.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { EmiterComponent } from "./components/emiter/emiter.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";

const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'diretivas', component: DirectivasComponent},
    {path: 'emiter', component: EmiterComponent},
    {path: 'eventos', component: EventosComponent},
    {path: 'ifrender', component: IfRenderComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'bind', component: TwoWayBindingComponent},
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}