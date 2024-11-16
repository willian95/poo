import { changeNameController } from "./depencies"

const router: any = {}

router.get('/api', changeNameController.changeName.bind(changeNameController))