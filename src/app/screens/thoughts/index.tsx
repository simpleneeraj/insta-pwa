import View from "ui/view";
import thoughts from "lib/thoughts";
import css from "app/style/thoughts.module.scss";
import useCustomization from "store/hooks/use-customization";

function Thoughts() {
  const { customizationTextContent, customizationState } = useCustomization();

  return (
    <View className={css["container"]}>
      <View className={css["list-container"]}>
        {thoughts.map((data, index) => {
          return (
            <View
              className={css["card"]}
              key={index}
              onClick={() =>
                customizationTextContent({
                  title: data.author,
                  message: data.content,
                })
              }
            >
              <p className={css["label"]}>{data.author}</p>
              <p className={css["content"]}>{data.content}</p>
            </View>
          );
        })}
      </View>
    </View>
  );
}
export default Thoughts;
