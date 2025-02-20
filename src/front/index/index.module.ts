import {Module} from "@nestjs/common";
import {IndexService} from "./index.service";
import {IndexController} from "./index.controller";
import {TranslationService} from "../../common/translation/translation";

@Module({
    controllers: [IndexController],
    providers: [IndexService,TranslationService],
})
export class IndexModule {}