import { ChangeNameUseCase } from "../Application/ChangeName.usecase";

export class ChangeNameController {
    constructor(private readonly changeNameUseCase: ChangeNameUseCase) {}

    async changeName(req: any, res: any){
        const { name } = req.body;
        await this.changeNameUseCase.changeName(name);
        res.status(200).send();
    }

}