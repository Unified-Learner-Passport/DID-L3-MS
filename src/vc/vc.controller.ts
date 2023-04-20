import { Body, Controller, Post } from '@nestjs/common';
import { SignJsonDTO } from './dtos/Sign.dto';
import { VerifyJsonDTO } from './dtos/Verify.dto';
import VcService from './vc.service';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('VC')
@Controller('utils')
export class VcController {
  constructor(private readonly vcService: VcService) {}

  @ApiOperation({ summary: 'Sign an unsigned VC' })
  @ApiOkResponse({ description: 'VC Signed' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  @Post('/sign')
  sign(@Body() body: SignJsonDTO) {
    return this.vcService.sign(body.DID, body.payload);
  }

  @ApiOperation({ summary: 'Verify a signed VC' })
  @Post('/verify')
  verify(@Body() body: VerifyJsonDTO) {
    return this.vcService.sign(body.DID, body.payload);
  }
}
