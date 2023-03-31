import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class Proposal {
  @ApiProperty({ example: 'Propietario', description: 'Nombre de Propietario' })
  @IsString()
  readonly propietario: string;

  @ApiProperty({ example: "Inquilino", description: 'Nombre de Inquilino' })
  @IsInt()
  readonly inquilino: string;

  @ApiProperty({ example: "Fecha Comienzo", description: 'Fecha inicio de contrato' })
  @IsString()
  readonly pinicio: string;

  @ApiProperty({ example: "Fecha de Finalizacion", description: 'Fecha finalizacion de contrato' })
  @IsInt()
  readonly finalizacion: string;

  @ApiProperty({ example: "Amount USDT", description: 'Monto mensual en USDT' })
  @IsInt()
  readonly amount: string;

  @ApiProperty({ example: "HASH CONTRATO", description: 'Hash Imagen de contrato' })
  @IsInt()
  readonly hash: string;
}