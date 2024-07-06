import create from 'zustand';

const useGlobalStore = create((set) => ({
  productsCategory: '',
  serviceSection: '',
  searchText:'',
  selectedLetter:'',
  updateProductsCategory: (productsCategory) => set(() => ({ productsCategory: productsCategory })),
  updateServiceSection: (serviceSection) => set(() => ({ serviceSection: serviceSection })),
  updateSearchText: (searchText) => set(() => ({ searchText: searchText })),
  updateSelectedLetter: (selectedLetter) => set(() => ({ selectedLetter: selectedLetter })),
}))

export default useGlobalStore;