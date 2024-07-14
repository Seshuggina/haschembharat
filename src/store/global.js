import create from 'zustand';

const useGlobalStore = create((set) => ({
  productsCategory: [],
  serviceSection: '',
  searchedText:'',
  selectedLetter:'',
  updateProductsCategory: (productsCategory) => set(() => ({ productsCategory: productsCategory })),
  updateServiceSection: (serviceSection) => set(() => ({ serviceSection: serviceSection })),
  updateSearchText: (searchedText) => set(() => ({ searchedText: searchedText })),
  updateSelectedLetter: (selectedLetter) => set(() => ({ selectedLetter: selectedLetter })),
}))

export default useGlobalStore;