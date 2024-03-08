import { Component, NgModule, OnDestroy, OnInit, inject } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDialog } from "@angular/material/dialog";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TituloGlobalService } from "../../../../service/titulo/titulo-global.service";
import { Subject, takeUntil } from "rxjs";
import { CategoriaServiceService } from "../../../../service/categoria/categoria-service.service";

import { TituloSharedService } from "../../../../service/Shared/titulo-shared.service";
import { CategoriaFormComponent } from "../categoria-form/categoria-form.component";

@Component({
  selector: "app-titulo-form",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    CategoriaFormComponent,
    MatExpansionModule,
    
  ],
  templateUrl: "./titulo-form.component.html",
  styleUrl: "./titulo-form.component.css",
})
export class TituloFormComponent {
  private fb = inject(FormBuilder);
  private tituloGlobalService = inject(TituloGlobalService);
  private categoriaService = inject(CategoriaServiceService);
  private sair$ = new Subject<void>();
  private sharedService = inject(TituloSharedService);

  categorias: { descricao: string }[] = [];

  ngOnInit() {
    this.buscarAtualizarCategoria();
    this.sharedService
      .getTipoAtualObservable()
      .pipe(takeUntil(this.sair$))
      .subscribe((tipo) => {
        console.log(tipo);
        this.tituloForm.get("tipo")?.setValue(tipo);
      });
  }

  // ABRIR O MODAL DE CATEGORIA E FECHAR APOS CRIAR UMA NOVA CATEGORIA

  categoriaSelecionada: string | null = null;

  modalFechar: boolean = false;

  atualizarCategorias() {
    this.categoriaService.buscar().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  categoriaFechar() {
    this.modalFechar = true;
    setTimeout(() => {
      this.modalFechar = false;
    }, 0);
  }

  onCategoriaCriada(novaCategoria: { descricao: string }): void {
    this.atualizarCategorias();
    if (novaCategoria) {
      this.categoriaSelecionada = novaCategoria.descricao;
    }
  }
  onAttCategoria() {
    this.atualizarCategorias();
    if (this.categorias.length > 0) {
      this.categoriaSelecionada = this.categorias[0].descricao;
      console.log("Categoria selecionada:", this.categoriaSelecionada);
    }
  }

  buscarAtualizarCategoria() {
    this.categoriaService.buscar().subscribe((cateoria) => {
      this.categorias = cateoria;
    });
  }

  // CRIANDO E CONFIGURANDO O FORMULARIO

  tituloForm = this.fb.group({
    tipo: [0, Validators.required],
    descricao: ["", Validators.required],
    valor: [0, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
    categoria: [""],
    dateTime: [null, Validators.required],
    quitado: [false],
  });

  // FORMATAR O VALOR RECEBIDO PELO INPUT PARA NUMERO E VALOR CORRENTE BRASIL


  // Enviando o Formulario para o Serivice bater na rota da api e cadastrar o titulo

  private dialog = inject (MatDialog)

  onSubmit(): void {
    if (this.tituloForm.valid) {
    
      const data = this.tituloForm;
      this.tituloGlobalService
        .criarTitulo(data)
        .pipe(takeUntil(this.sair$))
        .subscribe(() => {
          alert("Titulo Criado com Sucesso");
        this.dialog.closeAll();
        });
    } else {
      alert("formulario Incorreto");
    }
  }

  // Apos passar todos os campos ele vai fechar o Observable para evitar estouro de memoria
  ngOnDestroy() {
    this.sair$.next();
    this.sair$.complete();
  }

  //

  verificarTipo(tipo: number): void {
    this.tituloForm.get("tipo")?.setValue(tipo);
  }
}
