import React from "react";
import {Box,TextField,Button,Select,MenuItem,InputLabel,FormControl,} from "@mui/material";
import { styled } from "@mui/material/styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "../../axios";
import { toast } from "sonner";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const AddProd = ({ closeModal, fetchAgain }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      pictures: [],
      subcategory: {
        category: "Dry building mixtures",
        name:"Штукатурка",
      },
      price: 0,
      manufacturer: "",
      discount:0,
      description:"",
    },
   
    validationSchema: Yup.object({
      name: Yup.string().required("Заполните название!"),
      price: Yup.number()
        .required("Заполните стоимость!")
        .min(1, "Стоимость должна быть целым положительным числом!"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`/createproducts`, values);
        if (response.status !== 201) {
          throw new Error("Ошибка создания товара");
        }
        toast.success("Товар успешно создан!");
        closeModal();
        fetchAgain();
      } catch (err) {
        toast.error(`${err}`);
      }
    },
  });

  const handleCategoryChange = (event) => {
    formik.setFieldValue("subcategory.category", event.target.value);
    // Сбросить подкатегорию при изменении категории
    formik.setFieldValue("subcategory.name", "");
  };

  const handleSubcategoryChange = (event) => {
    formik.setFieldValue("subcategory.name", event.target.value);
  };

  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (!files.length) return;

    const newImageUrls = [...formik.values.pictures];
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = () => {
        newImageUrls.push(reader.result);
        formik.setFieldValue("pictures", newImageUrls);
      };
      reader.readAsDataURL(file);
    }
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "chat-app");
      formData.append("defufmuuc", "8rg4aKYAJXt8JYpXYZliC34tZlc");

      // Upload each file using fetch or a library like Axios
      await fetch("https://api.cloudinary.com/v1_1/8rg4aKYAJXt8JYpXYZliC34tZlc/image/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          // Update form with individual image URLs
          const imageUrls = [...formik.values.pictures, data.url.toString()];
          formik.setFieldValue("pictures", imageUrls);
        })
        .catch((err) => {
          console.error("Error uploading file:", err);
          // Handle upload error (e.g., display error message)
        });
    }
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box className="flex flex-col gap-5 mt-3">
        {formik.values.pictures.map((imageUrl) => (
          <Box key={imageUrl}>
            <img src={imageUrl} alt="Выбранное изображение" />
          </Box>
        ))}
        <Button
          component="label"
          role={undefined}
          variant="outlined"
          tabIndex={-1}
        >
          <Box>Добавьте изображения</Box>
          <VisuallyHiddenInput
            multiple
            type="file"
            onChange={handleFileChange}
          />
        </Button>
        <TextField
          label="Название товара"
          id="name"
          name="name"
          placeholder="Навание товара"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={!!formik.errors.name}
          helperText={formik.errors.name}
        />
        <TextField
          label="Цена"
          id="price"
          name="price"
          placeholder="Цена"
          onChange={formik.handleChange}
          value={formik.values.price}
          error={!!formik.errors.price}
          helperText={formik.errors.price}
        />
        <TextField
          label="Скидка"
          id="discount"
          name="discount"
          placeholder="Скидка"
          onChange={formik.handleChange}
          value={formik.values.discount}
          error={!!formik.errors.discount}
          helperText={formik.errors.discount}
        />
        <TextField
          label="Производитель"
          id="manufacturer"
          name="manufacturer"
          placeholder="Производитель"
          onChange={formik.handleChange}
          value={formik.values.manufacturer}
          error={!!formik.errors.manufacturer}
          helperText={formik.errors.manufacturer}
        />
        <FormControl>
          <InputLabel id="categoryLabel">Категория</InputLabel>
          <Select
            label="Категория"
            labelId="categoryLabel"
            id="category"
            name="category"
            onChange={handleCategoryChange}
            value={formik.values.subcategory.category}
            // error={!!formik.errors.subcategory.category}
          >
            <MenuItem value={"Dry building mixtures"}>Сухие строительные смеси</MenuItem>
            <MenuItem value={"Primers"}>Грунтовки</MenuItem>
            <MenuItem value={"Ready-made building mixtures"}>Готовые строительные смеси</MenuItem>
            <MenuItem value={"Drywall and components"}>Гипсокартон и комплектующие</MenuItem>
            <MenuItem value={"Skirting boards"}>Плинтуса</MenuItem>
            <MenuItem value={"Adhesives, sealants and silicones"}>Клеи, герметики и силиконы</MenuItem>
            <MenuItem value={"Scotch tape, film"}>Скотч, пленка</MenuItem>
            <MenuItem value={"Tools"}>Инструменты</MenuItem>
            <MenuItem value={"Plywood, timber, fiberboard"}>Фанера, брус, двп</MenuItem>
            <MenuItem value={"Decorative cornersmers"}>Углы декоративные</MenuItem>
            <MenuItem value={"Thresholds"}>Пороги</MenuItem>
            <MenuItem value={"Wallpaper, fiberglass"}>Обои, стеклохолст</MenuItem>
            <MenuItem value={"Fasteners"}>Крепеж</MenuItem>
          </Select>
        </FormControl>
        
        <FormControl>
          <InputLabel id="subcategoryLabel">Подкатегория</InputLabel>
          <Select
            label="Подкатегория"
            labelId="subcategoryLabel"
            id="subcategory"
            name="subcategory"
            onChange={handleSubcategoryChange}
            value={formik.values.subcategory.name}

            // error={!!formik.errors.subcategory.name}
          >
           {formik.values.subcategory.category === "Dry building mixtures" ? (
            [
            <MenuItem key="Штукатурка" value="Штукатурка">Штукатурка</MenuItem>,
            <MenuItem key="Шпаклевка" value="Шпаклевка">Шпаклевка</MenuItem>,
            <MenuItem key="Клей плиточный" value="Клей плиточный">Клей плиточный</MenuItem>,
            <MenuItem key="Наливной пол" value="Наливной пол">Наливной пол</MenuItem>,
            <MenuItem key="Стяжка" value="Стяжка">Стяжка</MenuItem>,
            <MenuItem key="Клей для газоблока" value="Клей для газоблока">Клей для газоблока</MenuItem>,
            <MenuItem key="Кладочная смесь" value="Кладочная смесь">Кладочная смесь</MenuItem>
            ]
            ) : null}

            {formik.values.subcategory.category === "Primers" ? (
            [
              <MenuItem key="Грунтовки" value="Грунтовки">Грунтовки</MenuItem>,
              <MenuItem key="Бетоноконтакт" value="Бетоноконтакт">Бетоноконтакт</MenuItem>,
              <MenuItem key="Пропитка" value="Пропитка">Пропитка</MenuItem>
            ]
            ) : null}
            {formik.values.subcategory.category === "Ready-made building mixtures" ? (
            [
              <MenuItem key="Шпаклевка" value="Шпаклевка">Шпаклевка</MenuItem>,
              <MenuItem key="Клей для обоев" value="Клей для обоев">Клей для обоев</MenuItem>,
              <MenuItem key="Гидроизоляция" value="Гидроизоляция">Гидроизоляция</MenuItem>
            ]
            ) : null}
            {formik.values.subcategory.category === "Drywall and components" ? (
            [
            <MenuItem key="ГКЛ" value="ГКЛ">ГКЛ</MenuItem>,
            <MenuItem key="Профили для ГКЛ" value="Профили для ГКЛ">Профили для ГКЛ</MenuItem>,
            <MenuItem key="Комплектующие для профилей" value="Комплектующие для профилей">Комплектующие для профилей</MenuItem>,
            <MenuItem key="Малярные углы" value="Малярные углы">Малярные углы</MenuItem>,
            ]
            ) : null}
            {formik.values.subcategory.category === "Skirting boards" ? (
            [
            <MenuItem key="Напольные" value="Напольные">Напольные</MenuItem>,
            <MenuItem key="Потолочные" value="Потолочные">Потолочные</MenuItem>,
            ]
            ) : null}
            {formik.values.subcategory.category === "Adhesives, sealants and silicones" ? (
            [
            <MenuItem key="Жидкие гвозди" value="Жидкие гвозди">Жидкие гвозди</MenuItem>,
            <MenuItem key="Клей для обоев" value="Клей для обоев">Клей для обоев</MenuItem>,
            <MenuItem key="Герметики" value="Герметики">Герметики</MenuItem>,
            <MenuItem key="Силиконы" value="Силиконы">Силиконы</MenuItem>,
            <MenuItem key="ПВА" value="ПВА">ПВА</MenuItem>,
            ]
            ) : null}
            {formik.values.subcategory.category === "Scotch tape, film" ? (
            [
            <MenuItem key="Скотч" value="Скотч">Скотч</MenuItem>,
            <MenuItem key="Пленка со скотчем" value="Пленка со скотчем">Пленка со скотчем</MenuItem>,
            <MenuItem key="Полиэтиленовая пленка" value="Полиэтиленовая пленка">Полиэтиленовая пленка</MenuItem>,
            ]
            ) : null}
             {formik.values.subcategory.category === "Tools" ? (
            [
            <MenuItem key="Ножи и лезвия" value="Ножи и лезвия">Ножи и лезвия</MenuItem>,
            <MenuItem key="Биты" value="Биты">Биты</MenuItem>,
            <MenuItem key="Мешки строительные" value="Мешки строительные">Мешки строительные</MenuItem>,
            <MenuItem key="Шпатели" value="Шпатели">Шпатели</MenuItem>,
            <MenuItem key="Перчатки" value="Перчатки">Перчатки</MenuItem>,
            <MenuItem key="Карандаши и маркеры" value="Карандаши и маркеры">Карандаши и маркеры</MenuItem>,
            ]
            ) : null}
             {formik.values.subcategory.category === "Plywood, timber, fiberboard" ? (
            [
            <MenuItem key="Фанера" value="Фанера">Фанера</MenuItem>,
            <MenuItem key="Брус" value="Брус">Брус</MenuItem>,
            <MenuItem key="ДВП" value="ДВП">ДВП</MenuItem>,
            ]
            ) : null}
             {formik.values.subcategory.category === "Decorative corners" ? (
            [
            <MenuItem key="Белые углы" value="Белые углы">Белые углы</MenuItem>,
            <MenuItem key="1*1" value="1*1">1*1</MenuItem>,
            <MenuItem key="1.5*1.5" value="1.5*1.5">1.5*1.5</MenuItem>,
            <MenuItem key="2*2" value="2*2">2*2</MenuItem>,
            <MenuItem key="3*3" value="3*3">3*3</MenuItem>,
            <MenuItem key="4*4" value="4*4">4*4</MenuItem>,
            <MenuItem key="Штапик" value="Штапик">Штапик</MenuItem>,
            <MenuItem key="Галтель" value="Галтель">Галтель</MenuItem>,
            ]
            ) : null}
             {formik.values.subcategory.category === "Thresholds" ? (
            [
            <MenuItem key="Пластиковые" value="Пластиковые">Пластиковые</MenuItem>,
            <MenuItem key="Алюминиевые" value="Алюминиевые">Алюминиевые</MenuItem>,
            ]
            ) : null}
            {formik.values.subcategory.category === "Wallpaper, fiberglass" ? (
            [
            <MenuItem key="Обои" value="Обои">Обои</MenuItem>,
            <MenuItem key="Стеклохолст" value="Стеклохолст">Стеклохолст</MenuItem>,
            ]
            ) : null}
            {formik.values.subcategory.category === "Fasteners" ? (
            [
            <MenuItem key="Саморезы по дереву" value="Саморезы по дереву">Саморезы по дереву</MenuItem>,
            <MenuItem key="Саморезы по металлу" value="Саморезы по металлу">Саморезы по металлу</MenuItem>,
            <MenuItem key="Дюбель-гвоздь" value="Дюбель-гвоздь">Дюбель-гвоздь</MenuItem>,
            <MenuItem key="Шуруп по бетону" value="Шуруп по бетону">Шуруп по бетону</MenuItem>,
            <MenuItem key="Анкер-клин" value="Анкер-клин">Анкер-клин</MenuItem>,
            ]
            ) : null}   
          </Select>
        </FormControl>
        <TextField
          label="Описание"
          id="description"
          name="description"
          placeholder="Описание"
          onChange={formik.handleChange}
          value={formik.values.description}
          error={!!formik.errors.description}
          helperText={formik.errors.description}
          multiline
        />
        <Button type="submit">Создать</Button>
      </Box>
    </form>
  );
};