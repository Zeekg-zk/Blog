import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cat')
export class Cat {
  /**
   * 自增主键
   */
  @PrimaryGeneratedColumn({
    comment: '自增 id',
  })
  id: number;

  /**
   * 名称
   */
  @Column({
    comment: '名称',
  })
  name: string;

  @Column({
    comment: '颜色',
  })
  color: string;
}
