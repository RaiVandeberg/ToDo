import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import Pencil from "../assets/icons/pencil.svg?react";
import Plus from "../assets/icons/plus.svg?react";
import Spinner from "../assets/icons/spinner.svg?react";
import X from "../assets/icons/x.svg?react";


export default function PageComponents() {
    return (
        <Container>
            <div >
                <Text variant="body-md-bold">Olá</Text>
                <div>
                    <Icon svg={TrashIcon} className="fill-pink-base" />
                    <Icon svg={CheckIcon} className="fill-green-base" />
                    <Icon svg={Pencil} className="fill-blue-base" />
                    <Icon svg={Plus} className="fill-yellow-base" />
                    <Icon svg={Spinner} animate />
                    <Icon svg={X} className="fill-red-base" />
                </div>
                <div className="flex gap-1">
                    <Badge loading>5</Badge>
                    <Badge variant="primary" size="sm">Primary</Badge>
                    <Badge variant="secondary" size="sm">Secondary</Badge>
                </div>
                <div>
                    <Button className="mt-2" icon={Plus} handling>
                        Primary
                    </Button>

                    <ButtonIcon icon={TrashIcon} />
                    <ButtonIcon icon={TrashIcon} variant="secondary" />
                    <ButtonIcon icon={TrashIcon} handling variant="tertiary" />
                </div>
                <InputText />
                <InputCheckbox />
                <Card size="md">Oiiii</Card>
                <Skeleton className="w-20 h-5" />
            </div>
        </Container>
    )
}