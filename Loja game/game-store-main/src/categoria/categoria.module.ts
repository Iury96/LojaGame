import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaController } from "src/categoria/controllers/categoria.controller";
import { ProdutoController } from "src/produto/controllers/produto.controller";
import { CategoriaService } from "src/categoria/services/categoria.service";
import { ProdutoService } from "src/produto/services/produto.service";
import { Categoria } from "./entities/categoria.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    controllers: [CategoriaController],
    providers: [CategoriaService],
    exports: [TypeOrmModule]
})

export class CategoriaModule {}