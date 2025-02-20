import { Injectable } from "@nestjs/common";
import { En } from "./lang/en";
import { Ru } from "./lang/ru";
import { Uz } from "./lang/uz";

@Injectable()
export class TranslationService {
    getTranslation(language: string) {
        switch (language) {
            case 'en':
                return En;
            case 'ru':
                return Ru;
            default:
                return Uz;
        }
    }
}
