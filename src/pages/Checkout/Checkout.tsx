import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'

import {
  AdressForm,
  AdressItens,
  AdressPay,
  AdressTitle,
  ButtonOrder,
  ButtonPay,
  CarfItens,
  Carform,
  FormItens,
  InputDivs,
  Inputs,
  ItemCar,
  ItemCarGroup,
  ItemCenterContent,
  ItemDelete,
  ItemQaunt,
  MainCheckout,
  OrderLine,
  OrderLineTotal,
  OrderResume,
  OrderText,
  Radiopay,
} from './styles'

function onblurCep(ev: any) {
  const { value } = ev.target
  if (value.length !== 8) {
    alert('O CEP precisa ter 8 números')
  }
  fetch(`https://viacep.com.br/ws/${value}/json/`)
    .then((res) => res.json())
    .then((data) => {
      if (data.erro) {
        alert('Cep não encontrado ou errado')
      }

      console.log(data)
    })
}

export function Checkout() {
  return (
    <MainCheckout>
      <AdressForm>
        <AdressItens>
          <div>
            <AdressTitle>
              <MapPinLine size={22} weight="thin" color="#C47F17" />
              <h3>Endereço de Entrega</h3>
            </AdressTitle>

            <h4>Informe o endereço onde deseja receber seu pedido</h4>
          </div>
          <div>
            <FormItens>
              <InputDivs>
                <Inputs
                  type="text"
                  id="cep"
                  placeholder="Cep"
                  onBlur={(ev) => onblurCep(ev)}
                />
              </InputDivs>
              <InputDivs>
                <Inputs type="text" id="rua" placeholder="Rua / Av." />
              </InputDivs>
              <InputDivs>
                <Inputs
                  type="text"
                  style={{ flexGrow: 1 }}
                  id="numero"
                  placeholder="Número"
                />
                <Inputs
                  type="text"
                  id="complemento"
                  placeholder="Complemento"
                />
              </InputDivs>
              <InputDivs>
                <Inputs type="text" id="bairro" placeholder="Bairro" />
                <Inputs type="text" id="Cidade" placeholder="Cidade" />
                <Inputs type="text" id="estado" placeholder="Estado" />
              </InputDivs>
            </FormItens>
          </div>
        </AdressItens>
        <AdressPay>
          <h3>
            <CurrencyDollar size={22} weight="fill" color="#8047F8" />
            Pagamento
          </h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <Radiopay>
            <ButtonPay>
              <CreditCard size={16} weight="thin" color="#8047F8" />
              Cartão de crédito
            </ButtonPay>
            <ButtonPay>
              <Bank size={16} weight="thin" color="#8047F8" />
              Cartão de débito
            </ButtonPay>
            <ButtonPay>
              <Money size={16} weight="thin" color="#8047F8" />
              Dinheiro
            </ButtonPay>
          </Radiopay>
        </AdressPay>
      </AdressForm>
      <Carform>
        <CarfItens>
          <div>
            <ItemCarGroup>
              <ItemCar>
                <div>
                  <img src="src/assets/tradicional.svg" alt="" />
                </div>
                <ItemCenterContent>
                  <div>
                    <div>
                      <h3>Expresso Tradicional</h3>
                    </div>
                    <ItemQaunt>
                      <section>
                        <Minus weight="bold" color="#8047F8" />
                        <p>1</p>
                        <Plus weight="bold" color="#8047F8" />
                      </section>
                      <ItemDelete>
                        <Trash size={16} color="#8047F8" />
                        Remover
                      </ItemDelete>
                    </ItemQaunt>
                  </div>
                </ItemCenterContent>
                <div>R$ 9,90</div>
              </ItemCar>
              <div>
                <hr />
              </div>
            </ItemCarGroup>
            <ItemCarGroup>
              <ItemCar>
                <div>
                  <img src="src/assets/tradicional.svg" alt="" />
                </div>
                <ItemCenterContent>
                  <div>
                    <div>
                      <h3>Expresso Tradicional</h3>
                    </div>
                    <ItemQaunt>
                      <section>
                        <Minus weight="bold" color="#8047F8" />
                        <p>1</p>
                        <Plus weight="bold" color="#8047F8" />
                      </section>
                      <ItemDelete>
                        <Trash size={16} color="#8047F8" />
                        Remover
                      </ItemDelete>
                    </ItemQaunt>
                  </div>
                </ItemCenterContent>
                <div>R$ 9,90</div>
              </ItemCar>
              <div>
                <hr />
              </div>
            </ItemCarGroup>
          </div>
        </CarfItens>
        <OrderResume>
          <OrderText>
            <OrderLine>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </OrderLine>
            <OrderLine>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </OrderLine>
            <OrderLineTotal>
              <p>Total</p>
              <p>R$ 33,20</p>
            </OrderLineTotal>
          </OrderText>
          <ButtonOrder typeof="submit">confirmar pedido</ButtonOrder>
        </OrderResume>
      </Carform>
    </MainCheckout>
  )
}
