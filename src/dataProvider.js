import { supabase } from './supabaseClient';

export const dataProvider = {
  getList: async () => {
    const { data, error } = await supabase.from('photos').select('*');
    if (error) throw new Error(error.message);
    return { data, total: data.length };
  },

  create: async (resource, params) => {
    const { title } = params.data;

    // Загружаем файл в Supabase Storage
    const file = params.data.url.rawFile;
    const { data: storageData, error: storageError } = await supabase.storage.from('gallery').upload(`${Date.now()}_${file.name}`, file);
    if (storageError) throw new Error(storageError.message);

    // Получаем публичный URL загруженного изображения
    const { publicURL } = supabase.storage.from('gallery').getPublicUrl(storageData.path);

    // Сохраняем запись в таблицу photos
    const { data, error } = await supabase.from('photos').insert([{ title, url: publicURL }]);
    if (error) throw new Error(error.message);

    return { data: data[0] };
  },

  delete: async (resource, params) => {
    const { data, error } = await supabase.from('photos').delete().eq('id', params.id);
    if (error) throw new Error(error.message);
    return { data: data[0] };
  }
};
