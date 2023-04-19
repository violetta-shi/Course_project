import {useDispatch, useSelector} from "react-redux";
import {categoriesStateSelector, getCategories} from "../../../store/categorySlice";
import {Nav} from "react-bootstrap";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";
import Loader from "../../util/Loader";

export default function CategoryMenuNavbar() {
    const {categories} = useSelector(categoriesStateSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [categories]);

    if (!categories) {
        return <Loader variant="dark" />;
    }

    return (
        <Nav fill className="flex-column align-items-stretch">
            {categories.map(category => (
                <Nav.Link as={NavLink} to={`/menu/${category.id}`}
                          className="btn btn-gray-orange my-1 justify-content-between d-flex" key={category.id}>
                    <span>{category.name}</span>
                    <span>{category.product_count}</span>
                </Nav.Link>
            ))}
        </Nav>
    );
}
