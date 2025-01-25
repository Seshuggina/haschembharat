import create from 'zustand';

const useGlobalStore = create((set) => ({
  productsCategoryList:[],
  productsCategory: [],
  serviceSection: '',
  searchedText:'',
  selectedLetter:'',
  updateProductsCategoryList: (productsCategoryList) => set(() => ({ productsCategoryList: productsCategoryList })),
  updateProductsCategory: (productsCategory) => set(() => ({ productsCategory: productsCategory })),
  updateServiceSection: (serviceSection) => set(() => ({ serviceSection: serviceSection })),
  updateSearchText: (searchedText) => set(() => ({ searchedText: searchedText })),
  updateSelectedLetter: (selectedLetter) => set(() => ({ selectedLetter: selectedLetter })),
}))

export default useGlobalStore;