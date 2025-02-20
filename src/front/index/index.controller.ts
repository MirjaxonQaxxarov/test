import {Controller,Session,Param, Get, Res,Req} from "@nestjs/common";
import {TranslationService} from "../../common/translation/translation";

@Controller('/')
export class IndexController{
    constructor(
        private readonly translationService: TranslationService,
    ) {}
    @Get('/setLang/:lang')
    setLang(@Req() req: any,@Res() res:any , @Session() session: any,@Param() param: string): void {
        session['lang'] = param['lang'];
        session.save();
        res.redirect(req.headers.referer);
    }
    @Get()
    index(@Res() res: any, @Session() session: any): string {
        const lang = session['lang'];
        const translation = this.translationService.getTranslation(lang);

        return res.render('front/index', {
            tr: translation.index,
            quiz_count: 50,
            student_count: 1240,
        });
    }
    @Get('/terms')
    terms(@Res() res: any, @Session() session: any): string {
        const lang = session['lang'];
        const translation = this.translationService.getTranslation(lang);

        return res.render('front/terms', {
            tr: translation.terms,
        });
    }
}