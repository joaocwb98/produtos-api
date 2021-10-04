/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from './produto.model'
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {
constructor(private produtosService: ProdutosService) {

}
    
@Get()
obterTodos(): Produto [] {
    return this.produtosService.obterTodos();
}

@Get(':id')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
obterUm(@Param() params): Produto {
return this.produtosService.obterUm(params.id);
}   

@Post()
criar(@Body() produto: Produto) {
    produto.id = 100;
    this.produtosService.criar(produto);
}

@Put()
alterar(@Body() produto: Produto): Produto {
    return this.produtosService.alterar(produto);
}

@Delete(':id')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
apagar(@Param() params) {
    this.produtosService.apagar(params.id);
}

}