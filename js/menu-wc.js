'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">po-slibrary documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/PoslibraryModule.html" data-type="entity-link" >PoslibraryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PoslibraryModule-9715afb28c101e1a1524ac7b397558cad2d87ae2975eb92ccb8626f8b5a43382e65d157bdf4cbd860ca5811b60bf593f0475cbf5fa5d07de17caf54868302ab3"' : 'data-target="#xs-components-links-module-PoslibraryModule-9715afb28c101e1a1524ac7b397558cad2d87ae2975eb92ccb8626f8b5a43382e65d157bdf4cbd860ca5811b60bf593f0475cbf5fa5d07de17caf54868302ab3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PoslibraryModule-9715afb28c101e1a1524ac7b397558cad2d87ae2975eb92ccb8626f8b5a43382e65d157bdf4cbd860ca5811b60bf593f0475cbf5fa5d07de17caf54868302ab3"' :
                                            'id="xs-components-links-module-PoslibraryModule-9715afb28c101e1a1524ac7b397558cad2d87ae2975eb92ccb8626f8b5a43382e65d157bdf4cbd860ca5811b60bf593f0475cbf5fa5d07de17caf54868302ab3"' }>
                                            <li class="link">
                                                <a href="components/PoslibraryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PoslibraryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PoslibraryModule-9715afb28c101e1a1524ac7b397558cad2d87ae2975eb92ccb8626f8b5a43382e65d157bdf4cbd860ca5811b60bf593f0475cbf5fa5d07de17caf54868302ab3"' : 'data-target="#xs-injectables-links-module-PoslibraryModule-9715afb28c101e1a1524ac7b397558cad2d87ae2975eb92ccb8626f8b5a43382e65d157bdf4cbd860ca5811b60bf593f0475cbf5fa5d07de17caf54868302ab3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PoslibraryModule-9715afb28c101e1a1524ac7b397558cad2d87ae2975eb92ccb8626f8b5a43382e65d157bdf4cbd860ca5811b60bf593f0475cbf5fa5d07de17caf54868302ab3"' :
                                        'id="xs-injectables-links-module-PoslibraryModule-9715afb28c101e1a1524ac7b397558cad2d87ae2975eb92ccb8626f8b5a43382e65d157bdf4cbd860ca5811b60bf593f0475cbf5fa5d07de17caf54868302ab3"' }>
                                        <li class="link">
                                            <a href="injectables/CatalogService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatalogService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DatabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DefaultService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InitDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InitDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InitService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InitService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PaymentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PlaceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/QrcodeLoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QrcodeLoginService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ReceiptService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReceiptService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UOMService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UOMService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ADLoginRequest.html" data-type="entity-link" >ADLoginRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/ADLoginResponse.html" data-type="entity-link" >ADLoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ADOrg.html" data-type="entity-link" >ADOrg</a>
                            </li>
                            <li class="link">
                                <a href="classes/ADRefList.html" data-type="entity-link" >ADRefList</a>
                            </li>
                            <li class="link">
                                <a href="classes/ADUser.html" data-type="entity-link" >ADUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppVersion.html" data-type="entity-link" >AppVersion</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppversionMesages.html" data-type="entity-link" >AppversionMesages</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppVersionStrategy.html" data-type="entity-link" >AppVersionStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppVersionUIResponse.html" data-type="entity-link" >AppVersionUIResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/BreakModel.html" data-type="entity-link" >BreakModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/BusinessBartner.html" data-type="entity-link" >BusinessBartner</a>
                            </li>
                            <li class="link">
                                <a href="classes/Catalog.html" data-type="entity-link" >Catalog</a>
                            </li>
                            <li class="link">
                                <a href="classes/Categorie.html" data-type="entity-link" >Categorie</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CBankAccount.html" data-type="entity-link" >CBankAccount</a>
                            </li>
                            <li class="link">
                                <a href="classes/CBPartner.html" data-type="entity-link" >CBPartner</a>
                            </li>
                            <li class="link">
                                <a href="classes/CBpartnerLocation.html" data-type="entity-link" >CBpartnerLocation</a>
                            </li>
                            <li class="link">
                                <a href="classes/CCurrency.html" data-type="entity-link" >CCurrency</a>
                            </li>
                            <li class="link">
                                <a href="classes/CDocType.html" data-type="entity-link" >CDocType</a>
                            </li>
                            <li class="link">
                                <a href="classes/Checker.html" data-type="entity-link" >Checker</a>
                            </li>
                            <li class="link">
                                <a href="classes/City.html" data-type="entity-link" >City</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConversionsContantsValues.html" data-type="entity-link" >ConversionsContantsValues</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConverT.html" data-type="entity-link" >ConverT</a>
                            </li>
                            <li class="link">
                                <a href="classes/COrder.html" data-type="entity-link" >COrder</a>
                            </li>
                            <li class="link">
                                <a href="classes/COrderLine.html" data-type="entity-link" >COrderLine</a>
                            </li>
                            <li class="link">
                                <a href="classes/CPayment.html" data-type="entity-link" >CPayment</a>
                            </li>
                            <li class="link">
                                <a href="classes/CpaymentUpload.html" data-type="entity-link" >CpaymentUpload</a>
                            </li>
                            <li class="link">
                                <a href="classes/CPaymentUpload.html" data-type="entity-link" >CPaymentUpload</a>
                            </li>
                            <li class="link">
                                <a href="classes/CTax.html" data-type="entity-link" >CTax</a>
                            </li>
                            <li class="link">
                                <a href="classes/CUOM.html" data-type="entity-link" >CUOM</a>
                            </li>
                            <li class="link">
                                <a href="classes/CUOMConversion.html" data-type="entity-link" >CUOMConversion</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrentQRcodeSetting.html" data-type="entity-link" >CurrentQRcodeSetting</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrentSetting.html" data-type="entity-link" >CurrentSetting</a>
                            </li>
                            <li class="link">
                                <a href="classes/Data.html" data-type="entity-link" >Data</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataRow.html" data-type="entity-link" >DataRow</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataSet.html" data-type="entity-link" >DataSet</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnglishPrintInfos.html" data-type="entity-link" >EnglishPrintInfos</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnlishConvertionParamsModel.html" data-type="entity-link" >EnlishConvertionParamsModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/Field.html" data-type="entity-link" >Field</a>
                            </li>
                            <li class="link">
                                <a href="classes/Filter.html" data-type="entity-link" >Filter</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterByPOReference.html" data-type="entity-link" >FilterByPOReference</a>
                            </li>
                            <li class="link">
                                <a href="classes/FrenchConvertionParamsModel.html" data-type="entity-link" >FrenchConvertionParamsModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/FrenchPrintInfos.html" data-type="entity-link" >FrenchPrintInfos</a>
                            </li>
                            <li class="link">
                                <a href="classes/Group.html" data-type="entity-link" >Group</a>
                            </li>
                            <li class="link">
                                <a href="classes/Grouper.html" data-type="entity-link" >Grouper</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpCache.html" data-type="entity-link" >HttpCache</a>
                            </li>
                            <li class="link">
                                <a href="classes/IpayResponse.html" data-type="entity-link" >IpayResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/Item.html" data-type="entity-link" >Item</a>
                            </li>
                            <li class="link">
                                <a href="classes/ItemModel.html" data-type="entity-link" >ItemModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/LastTimeFromTheBackend.html" data-type="entity-link" >LastTimeFromTheBackend</a>
                            </li>
                            <li class="link">
                                <a href="classes/Location.html" data-type="entity-link" >Location</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocationLevel.html" data-type="entity-link" >LocationLevel</a>
                            </li>
                            <li class="link">
                                <a href="classes/Log.html" data-type="entity-link" >Log</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginConstants.html" data-type="entity-link" >LoginConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModelCRUD.html" data-type="entity-link" >ModelCRUD</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModelCRUDPay.html" data-type="entity-link" >ModelCRUDPay</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModelCRUDPayCompare.html" data-type="entity-link" >ModelCRUDPayCompare</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModelCRUDRequest.html" data-type="entity-link" >ModelCRUDRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModelRunProcess.html" data-type="entity-link" >ModelRunProcess</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModelRunProcessRequest.html" data-type="entity-link" >ModelRunProcessRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/MPriceBreak.html" data-type="entity-link" >MPriceBreak</a>
                            </li>
                            <li class="link">
                                <a href="classes/MPriceList.html" data-type="entity-link" >MPriceList</a>
                            </li>
                            <li class="link">
                                <a href="classes/MPriceListVersion.html" data-type="entity-link" >MPriceListVersion</a>
                            </li>
                            <li class="link">
                                <a href="classes/MProduct.html" data-type="entity-link" >MProduct</a>
                            </li>
                            <li class="link">
                                <a href="classes/MProductCategory.html" data-type="entity-link" >MProductCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/MProductPrice.html" data-type="entity-link" >MProductPrice</a>
                            </li>
                            <li class="link">
                                <a href="classes/MWarehouse.html" data-type="entity-link" >MWarehouse</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyData.html" data-type="entity-link" >MyData</a>
                            </li>
                            <li class="link">
                                <a href="classes/OLine.html" data-type="entity-link" >OLine</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderItem.html" data-type="entity-link" >OrderItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrdersViewModel.html" data-type="entity-link" >OrdersViewModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderUpload.html" data-type="entity-link" >OrderUpload</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParamValues.html" data-type="entity-link" >ParamValues</a>
                            </li>
                            <li class="link">
                                <a href="classes/PayCompare.html" data-type="entity-link" >PayCompare</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentUpload.html" data-type="entity-link" >PaymentUpload</a>
                            </li>
                            <li class="link">
                                <a href="classes/PayUpload.html" data-type="entity-link" >PayUpload</a>
                            </li>
                            <li class="link">
                                <a href="classes/PerformPaymentMessagesConstants.html" data-type="entity-link" >PerformPaymentMessagesConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/PhonesConstants.html" data-type="entity-link" >PhonesConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/Place.html" data-type="entity-link" >Place</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlacesConstants.html" data-type="entity-link" >PlacesConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceChecker.html" data-type="entity-link" >PriceChecker</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductModelData.html" data-type="entity-link" >ProductModelData</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductPrices.html" data-type="entity-link" >ProductPrices</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductsConstants.html" data-type="entity-link" >ProductsConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/Receipt.html" data-type="entity-link" >Receipt</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseData.html" data-type="entity-link" >ResponseData</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Settings.html" data-type="entity-link" >Settings</a>
                            </li>
                            <li class="link">
                                <a href="classes/SQLiteMock.html" data-type="entity-link" >SQLiteMock</a>
                            </li>
                            <li class="link">
                                <a href="classes/SQLiteObject.html" data-type="entity-link" >SQLiteObject</a>
                            </li>
                            <li class="link">
                                <a href="classes/SQLitePorterMock.html" data-type="entity-link" >SQLitePorterMock</a>
                            </li>
                            <li class="link">
                                <a href="classes/UIData.html" data-type="entity-link" >UIData</a>
                            </li>
                            <li class="link">
                                <a href="classes/UiModel.html" data-type="entity-link" >UiModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/UIMoMoData.html" data-type="entity-link" >UIMoMoData</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniversalConstants.html" data-type="entity-link" >UniversalConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/UOMConversion.html" data-type="entity-link" >UOMConversion</a>
                            </li>
                            <li class="link">
                                <a href="classes/UOMResult.html" data-type="entity-link" >UOMResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/Urls.html" data-type="entity-link" >Urls</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserInitialSetting.html" data-type="entity-link" >UserInitialSetting</a>
                            </li>
                            <li class="link">
                                <a href="classes/WindowTabData.html" data-type="entity-link" >WindowTabData</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AESEncryptDecryptService.html" data-type="entity-link" >AESEncryptDecryptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppversionService.html" data-type="entity-link" >AppversionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CatalogService.html" data-type="entity-link" >CatalogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConvertNumberToEnglishWords.html" data-type="entity-link" >ConvertNumberToEnglishWords</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConvertNumberToFrenchWords.html" data-type="entity-link" >ConvertNumberToFrenchWords</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseService.html" data-type="entity-link" >DatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DefaultService.html" data-type="entity-link" >DefaultService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InitDataService.html" data-type="entity-link" >InitDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InitService.html" data-type="entity-link" >InitService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogService.html" data-type="entity-link" >LogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderWebService.html" data-type="entity-link" >OrderWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PartnerService.html" data-type="entity-link" >PartnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentService.html" data-type="entity-link" >PaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlaceService.html" data-type="entity-link" >PlaceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PoslibraryService.html" data-type="entity-link" >PoslibraryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceBreakService.html" data-type="entity-link" >PriceBreakService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QrcodeLoginService.html" data-type="entity-link" >QrcodeLoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReceiptService.html" data-type="entity-link" >ReceiptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RunProcessWebService.html" data-type="entity-link" >RunProcessWebService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UOMService.html" data-type="entity-link" >UOMService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});