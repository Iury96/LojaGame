import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaController } from "src/categoria/controllers/categoria.controller";
import { ProdutoController } from "src/produto/controllers/produto.controller";
import { CategoriaService } from "src/categoria/services/categoria.service";
import { ProdutoService } from "src/produto/services/produto.service";
import { Produto } from "./entities/produto.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    controllers: [ProdutoController],
    providers: [ProdutoService],
    exports: [TypeOrmModule]
})

export class ProdutoModule {}