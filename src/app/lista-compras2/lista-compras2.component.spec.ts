import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompras2Component } from './lista-compras2.component';

describe('ListaCompras2Component', () => {
  let component: ListaCompras2Component;
  let fixture: ComponentFixture<ListaCompras2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCompras2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCompras2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
